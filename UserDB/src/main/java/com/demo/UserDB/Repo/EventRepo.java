package com.demo.UserDB.Repo;

import com.demo.UserDB.Entity.Event;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventRepo extends JpaRepository <Event, Integer> {

}
