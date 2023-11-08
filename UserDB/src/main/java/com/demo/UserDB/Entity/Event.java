package com.demo.UserDB.Entity;

import javax.persistence.*;

@Entity
@Table(name="event")
public class Event {
    @Id
    @Column(name = "event_id", length = 45)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer evId;
    @Column(name = "eventName", length = 255)
    private String eventName;
    @Column(name = "title", length = 255)
    private String title;
    @Column(name = "description", length = 255)
    private String description;
    @Column(name = "category", length = 255)
    private String category;
    @Column(name = "price", length = 255)
    private Double price;

    public Event() {
    }

    public Event(Integer evId, String eventName, String title, String description, String category, Double price) {
        this.evId = evId;
        this.eventName = eventName;
        this.title = title;
        this.description = description;
        this.category = category;
        this.price = price;
    }

    public Integer getEvId() {
        return evId;
    }

    public void setEvId(Integer evId) {
        this.evId = evId;
    }

    public String getEventName() {
        return eventName;
    }

    public void setEventName(String eventName) {
        this.eventName = eventName;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return "Event{" +
                "evId=" + evId +
                ", eventName='" + eventName + '\'' +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", category='" + category + '\'' +
                ", price=" + price +
                '}';
    }
}
