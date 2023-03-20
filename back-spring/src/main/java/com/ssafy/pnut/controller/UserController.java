package com.ssafy.pnut.controller;

import com.ssafy.pnut.dto.UserDto;
import com.ssafy.pnut.dto.UserMailMessageDto;
import com.ssafy.pnut.entity.User;
import com.ssafy.pnut.util.JwtService;
import com.ssafy.pnut.util.MailService;
import com.ssafy.pnut.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins={"*"}, maxAge = 6000)
@RestController
@RequestMapping("/users")
@Api(tags = {"회원 관리 API"})
public class UserController {
    @Autowired
    private UserService userService;
    @Autowired
    private MailService userMailService;
    @Autowired
    private JwtService jwtService;

    public static final Logger logger = LoggerFactory.getLogger(UserController.class);
    private static final String SUCCESS = "success in UserController";
    private static final String FAIL = "fail in UserController";
    private static final String ALREADY_EXIST = "already exists in UserController";

    @ApiOperation(value = "이메일 중복검사", notes = "이메일 중복 확인 API", response = Map.class)
    @PostMapping("/check")
    public ResponseEntity<?> emailCheck(
            @RequestBody @ApiParam(value = "이메일 중복 여부", required = true) UserDto userDto){
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status;
        try{
            if(userMailService.eamilCheck(userDto.getEmail())){
                resultMap.put("message", SUCCESS);
                status = HttpStatus.OK;
            }else{
                resultMap.put("message", FAIL);
                status = HttpStatus.ACCEPTED;
            }
        }catch (Exception e){
            logger.error("이메일 중복 : {}", e);
            resultMap.put("message", e.getMessage());
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<>(resultMap, status);
    }

    @ApiOperation(value = "이메일 인증", notes = "이메일 인증 요청 API", response = Map.class)
    @PostMapping("/certification")
    public ResponseEntity<?> emailCertification(
            @RequestBody @ApiParam(value="이메일 인증", required = true) UserDto userDto){
        HttpStatus status;
        Map<String, Object> resultMap = new HashMap<>();
        UserMailMessageDto userMailMessageDto = new UserMailMessageDto(userDto.getEmail(), "인증코드 발송 안내 드립니다.", null);

        try{
            String authNum = userMailService.sendMail(userMailMessageDto, "email");
            resultMap.put("authNum", authNum);
            status = HttpStatus.OK;
        }catch (Exception e){
            logger.error("인증번호 발송 실패 : {}", e);
            resultMap.put("message", e.getMessage());
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<>(resultMap, status);
    }

    @ApiOperation(value = "이메일 인증 확인", notes = "이메일 인증 확인 API", response = Map.class)
    @PostMapping("/checkAuth")
    public ResponseEntity<?> emailAuthrization(
            @RequestBody @ApiParam(value = "인증번호 확인", required = true) UserDto userDto){
        HttpStatus status;
        Map<String, Object> resultMap = new HashMap<>();
        try{
            if(userMailService.checkCode(userDto.getAuth())){
                resultMap.put("message", SUCCESS);
                resultMap.put("authNum", "");
                status = HttpStatus.OK;
            }else{
                resultMap.put("message", FAIL);
                status = HttpStatus.ACCEPTED;
            }
        }catch(Exception e){
            logger.error("인증 번호 다름 : {}", e);
            resultMap.put("message", e.getMessage());
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<>(resultMap, status);
    }

    @ApiOperation(value = "회원가입", notes = "회원가입 요청 API", response = Map.class)
    @PostMapping("")
    public ResponseEntity<?> registerUser(
            @RequestBody @ApiParam(value="회원가입 시 필요한 정보", required = true) UserDto userDto){
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status;


        try{
            //create UserEntity by Builder Pattern
            if(userDto.getAuth().equals("")) {
                resultMap.put("message", FAIL);
                status = HttpStatus.BAD_REQUEST;
            }else{
                User user = userDto.toEntity();
                User result = userService.registerUser(user);
                if (result != null) {
                    resultMap.put("message", SUCCESS);
                    status = HttpStatus.OK;
                    //if success register, return success message , 200 response code
                } else {
                    resultMap.put("message", FAIL);
                    status = HttpStatus.ACCEPTED;
                    // if fail register user, return fail message , user info no validation, 204 response code
                }
            }
        }catch (Exception e){
            logger.error("회원가입 실패 : {}", e);
            resultMap.put("message", e.getMessage());
            status = HttpStatus.INTERNAL_SERVER_ERROR;
            //if occurred error during register, return fail message , 500 response code
        }
        return new ResponseEntity<>(resultMap, status);
    }

    @ApiOperation(value = "로그인", notes = "access-token, Refresh-token과 로그인 결과 메시지를 반환한다.", response = Map.class)
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(
            @RequestBody @ApiParam(value = "로그인 시 필요한 회원정보.", required = true) UserDto userDto){
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status;

        try{
            User loginUser = userService.loginUser(userDto.toEntity());
            if(loginUser != null){
                String accessToken = jwtService.createAccessToken("email", loginUser.getEmail()); //key, value
                String refreshToken = jwtService.createRefreshToken("email", loginUser.getEmail());
                userService.saveRefreshToken(userDto.toEntity().getEmail(), refreshToken);
                logger.debug("로그인 accessToken 정보 : {}", accessToken);
                logger.debug("로그인 refreshToken 정보 : {}", refreshToken);
                resultMap.put("access-token", accessToken);
                resultMap.put("refresh-token", refreshToken);
                resultMap.put("email", loginUser.getEmail());
                resultMap.put("nickname", loginUser.getNickname());
                resultMap.put("type", loginUser.getType());
                resultMap.put("message", SUCCESS);
                status = HttpStatus.OK;
            }else{
                logger.debug("password error");
                resultMap.put("message", FAIL);
                status = HttpStatus.ACCEPTED;
            }
        } catch(Exception e){
            e.printStackTrace();
            logger.error("로그인 실패 : {}", e);
            resultMap.put("message", e.getMessage());
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<>(resultMap, status);
    }

//    @ApiOperation(value = "소셜로그인", notes= "access-token, refresh-token과 로그인 결과 메시지 반환", response = Map.class)
//    @PostMapping("/socialLogin")
//    public ResponseEntity<?> socialLogin(
//            @RequestBody @ApiParam(value = "로그인 시 필요한 회원정보.", required = true) UserDto userDto){
//        Map<String, Object> resultMap = new HashMap<>();
//        HttpStatus status;
//
//        try{
//            User loginUser = userDto.toEntity();
//        }
//    }
}
