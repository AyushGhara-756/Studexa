package org.th.studexa.authentication;

public enum Roles {
    Student("student"),
    Teacher("teacher"),
    Parent("parent");

    private String role;

    Roles(String role) {
        this.role = role;
    }

    public static Roles fromValue(String value){
        for (Roles roles: Roles.values()){
            if (roles.role.equalsIgnoreCase(value)){
                return roles;
            }
        }
        throw new IllegalArgumentException();
    }
}
