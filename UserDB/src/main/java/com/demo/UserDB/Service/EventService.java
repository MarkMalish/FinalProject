package com.demo.UserDB.Service;
import com.demo.UserDB.DTO.EventDTO;
import  com.demo.UserDB.Entity.Event;
import java.util.List;
public interface EventService{
  //  String addEvent (EventDTO eventDTO);
  public Event addEvent(Event event);
    public List<Event> getAllEvent();
    public Event getEventById(Integer evid);
    public String deleteEvent(Integer evid);
  public Event editEvent(Event event,Integer evid);
}
