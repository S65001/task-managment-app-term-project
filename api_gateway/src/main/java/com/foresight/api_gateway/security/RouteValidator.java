package com.foresight.api_gateway.security;

import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.function.Predicate;

@Component
public class RouteValidator {

    private static final List<String> AllowedEndpoints = List.of(
            "/users/login",
            "/swagger-ui",
            "/eureka"
    );

    public static boolean shouldAuthenticate(ServerHttpRequest request)
    {
       return AllowedEndpoints
                .stream()
                .noneMatch(uri -> request.getURI().getPath().startsWith(uri));

    }


}