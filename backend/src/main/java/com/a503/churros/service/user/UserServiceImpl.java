package com.a503.churros.service.user;

import com.a503.churros.dto.user.response.MyPageResponse;
import com.a503.churros.entity.user.User;
import com.a503.churros.repository.user.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{

    private final UserRepository userRepository;

    public MyPageResponse myPage(Long userIdx){
        Optional<User> user = userRepository.findById(userIdx);
        log.info(user.toString());



        MyPageResponse myPageResponse = MyPageResponse.builder().result("success").name(user.get().getName())
                .email(user.get().getEmail()).provider(user.get().getProvider()).imageUrl(user.get().getImageUrl()).build();
        return myPageResponse;
    }
}
