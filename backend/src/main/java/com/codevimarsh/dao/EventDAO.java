package com.codevimarsh.dao;

import com.codevimarsh.model.Event;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventDAO extends JpaRepository<Event, Long> {
}


