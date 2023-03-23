package com.ssafy.pnut.util;

import com.ssafy.pnut.dto.UserMailMessageDto;
import com.ssafy.pnut.entity.User;
import com.ssafy.pnut.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.util.Optional;
import java.util.Random;

@Slf4j
@Service
@RequiredArgsConstructor
public class MailServiceImpl implements MailService {
    private final JavaMailSender javaMailSender;
    private final TemplateEngine templateEngine;
    private final RedisUtilImpl redisUtil;
    private final UserRepository userRepository;

    @Override
    public boolean eamilCheck(String email) {
        User userEmail = userRepository.findByEmail(email);
        if(userEmail==null){
            return true;
        }
        return false;
    }

    @Override
    public boolean emailCertification(String email) {
        return false;
    }

    @Override
    public String sendMail(UserMailMessageDto mailMessage, String type) {
        String authNum = createCode();

        MimeMessage mimeMessage = javaMailSender.createMimeMessage();

        try{
            MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, false, "utf-8");
            mimeMessageHelper.setTo(mailMessage.getTo());//receiver
            mimeMessageHelper.setSubject(mailMessage.getSubject());//mail subject
            mimeMessageHelper.setText(setContext(authNum, type), true);//mail content
            javaMailSender.send(mimeMessage);

            if(type.equals("email")) redisUtil.setDataExpire(authNum, mailMessage.getTo(), 60*5L);

            log.info("Success");
            return authNum;
        }catch(MessagingException e){
            log.info("fail");
            throw new RuntimeException(e);
        }
    }

    @Override
    public String createCode() {
        Random random = new Random();
        StringBuffer key = new StringBuffer();

        for (int i=0; i<8; i++){
            int index = random.nextInt(4);

            switch(index){
                case 0:
                    key.append((char)((int)random.nextInt(26)+97));
                    break;
                case 1:
                    key.append((char)((int)random.nextInt(26)+65));
                    break;
                default:
                    key.append(random.nextInt(9));
            }
        }
        return key.toString();
    }

    @Override
    public String setContext(String code, String type) {
        Context context = new Context();
        context.setVariable("code", code);
        return templateEngine.process(type, context);
    }

    @Override
    public boolean checkCode(String code) {
        String email = redisUtil.getData(code);
        if(email != null){
            redisUtil.deleteData(code);
            redisUtil.setDataExpire(email, "validate", 60 * 10L);
            return true;
        } else return false;
    }

    @Override
    public boolean checkAuthentification(String email) {
        String result = redisUtil.getData(email);
        if(result != null){
            redisUtil.deleteData(email);
            return true;
        } else return false;
    }
}
