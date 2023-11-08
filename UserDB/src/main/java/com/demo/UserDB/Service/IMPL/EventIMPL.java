package com.demo.UserDB.Service.IMPL;

import com.demo.UserDB.DTO.EventDTO;
import com.demo.UserDB.DTO.UserDTO;
import com.demo.UserDB.Entity.Event;
import com.demo.UserDB.Entity.User;
import com.demo.UserDB.Repo.EventRepo;
import com.demo.UserDB.Service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
@Service
public class EventIMPL implements EventService {
    @Autowired
    private EventRepo eventRepo;
    //@Override
   // public String addEvent(EventDTO eventDTO) {
      //  Event event = new Event(
      //          eventDTO.getEventId(),
     //           eventDTO.getEventName(),
      //          eventDTO.getTitle(),
      //          eventDTO.getDescription(),
       //         eventDTO.getCategory(),
       //         eventDTO.getPrice()
       // );
       // eventRepo.save(event);
       // return event.getEventName();
  //  }
    @Override
    public Event addEvent(Event event) {

        return eventRepo.save(event);
    }

    @Override
    public List<Event> getAllEvent() {
        return eventRepo.findAll();
    }

    @Override
    public Event getEventById(Integer evId) {
        return eventRepo.findById(evId).get();
    }

    @Override
    public String deleteEvent(Integer evId) {
        Event event = eventRepo.findById(evId).get();
        if (event != null) {
            eventRepo.delete(event);
            return "Product Delete Sucessfully";
        }
        return "Something wrong on server";
    }
    @Override
    public Event editEvent(Event p, Integer evid) {

        Event oldEvent = eventRepo.findById(evid).get();

        oldEvent.setEventName(p.getEventName());
        oldEvent.setDescription(p.getDescription());
        oldEvent.setPrice(p.getPrice());
        oldEvent.setCategory(p.getCategory());
        oldEvent.setTitle(p.getTitle());

        return eventRepo.save(oldEvent);
    }
}
