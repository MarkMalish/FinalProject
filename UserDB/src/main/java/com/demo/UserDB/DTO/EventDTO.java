package com.demo.UserDB.DTO;

import javax.persistence.Column;

public class EventDTO {
    private Integer eventId;

    private String eventName;

    private String title;

    private String description;

    private String category;

    private Double price;

    public EventDTO(Integer eventId, String eventName, String title, String description, String category, Double price) {
        this.eventId = eventId;
        this.eventName = eventName;
        this.title = title;
        this.description = description;
        this.category = category;
        this.price = price;
    }

    public EventDTO() {
    }

    public Integer getEventId() {
        return eventId;
    }

    public void setEventId(Integer eventId) {
        this.eventId = eventId;
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
        return "EventDTO{" +
                "eventId=" + eventId +
                ", eventName='" + eventName + '\'' +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", category='" + category + '\'' +
                ", price=" + price +
                '}';
    }
}
