package com.codevimarsh.service;

import com.codevimarsh.dao.EventDAO;
import com.codevimarsh.model.Event;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventService {

    @Autowired
    private EventDAO eventDAO;

    public List<Event> getAllEvents() {
        return eventDAO.findAll();
    }

    public Event saveEvent(Event event) {
        return eventDAO.save(event);
    }
}


