package com.news.model;

/**
 * Created by zl on 2015/8/27.
 */
public class User {
    private String name;
    private Integer age;
    private String password;

    public void setName(String name) {
        this.name = name;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public Integer getAge() {
        return age;
    }

    public String getPassword() {
        return password;
    }
}
