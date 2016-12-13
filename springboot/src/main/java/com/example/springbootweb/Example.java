package com.example.springbootweb;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@EnableAutoConfiguration
@SpringBootApplication
public class Example {
	@RequestMapping("/")
	String home(){
		return "Hello World！";
	}
	
	public static void main(String[] args) throws Exception{
		SpringApplication.run(Exception.class, args);
	}
	class test implements CommandLineRunner{

		@Override
		public void run(String... arg0) throws Exception {
			
		}
		
	}
}
