package com.demo.UserDB.Controller;

import com.demo.UserDB.DTO.EventDTO;
import com.demo.UserDB.DTO.UserDTO;
import com.demo.UserDB.Entity.Event;
import com.demo.UserDB.Service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:8085/")
@RequestMapping("/api/v1/event")
public class EventController {
    @Autowired
private EventService eventService;
    @PostMapping(path="/saveEvent")
  //  public String saveEvent(@RequestBody EventDTO eventDTO) {
     // String eventId = eventService.addEvent(eventDTO);
    //  return eventId;
    //}

    public ResponseEntity<?> addEvent(@RequestBody Event event) {
        return new ResponseEntity<>(eventService.addEvent(event), HttpStatus.CREATED);
    }



    @GetMapping("/allEvents")
    public ResponseEntity<?> getAllEvent() {
        return new ResponseEntity<>(eventService.getAllEvent(), HttpStatus.OK);
    }
    @GetMapping("/{evid}")
    public ResponseEntity<?> getProductById(@PathVariable Integer evid) {
        return new ResponseEntity<>(eventService.getEventById(evid), HttpStatus.OK);
    }

    @GetMapping("/deleteEvent/{evid}")
    public ResponseEntity<?> deleteEvent(@PathVariable Integer evid) {
        return new ResponseEntity<>
                (eventService.deleteEvent(evid), HttpStatus.OK);
    }

    @PostMapping("/editEvent/{evid}")
    public ResponseEntity<?> editEvent(@RequestBody Event event, @PathVariable Integer evid) {
        return new ResponseEntity<>(eventService.editEvent(event, evid), HttpStatus.CREATED);
    }
}
