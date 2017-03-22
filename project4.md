---
layout: portfolio
---
# Project 4 - VeNew Server side

### Overview
For my initial concept I knew I wanted to explore the relationships that can be created with Ruby on Rails - so at least three models. I wanted to create a social network between bars and musicians to make small venues and bars more accessible to unsigned artists.

***

The application can be used here: [VeNew](https://client-thingy.herokuapp.com/)

##### Venue Login Details  

email: chotto@matte.com  
password: password

##### Artist Login Details  

email: ed@sheeran.com  
password: password 	

As a Venue Manager the user can add an Event with a number of slots available. Each slot can then be requested by a registered Musician. The Venue Manager can then accept or reject that pending request.  

## MVP - Database Creation

### Migration

I decided to create the three models with  

```
rails g model
```  

and   

```
rails g controller
```

for each model.  
Once the three migration files were created they were migrated to the schema.  

### Model  
At first with the three models I used a few attributes for each model which could then be built upon and migrated again.

***

#### User - has many :requests, has many :events
An important decision I made for the User model was or not to create one for the Bars and another for the Musicians. However since this would mean setting user authentication for each type of user I decided to use an is_bar boolean throughout the application.  
Then within the User model I also had name, location, contact details etc.  

```
  validates_presence_of :is_bar
  validates_presence_of :bar_size, :bar_location, :bar_image, :bar_telephone, :website :if =>  lambda {|o| o.is_bar == 'yes' }
  validates_presence_of :band_telephone, :band_location, :if => lambda {|o| o.is_bar == 'no' }

  private
  def user_is_bar
    is_bar == 'yes'
  end

  def user_is_band
    is_bar == 'no'
  end
```  


##### User Serializer
Within the serializer I could use the attributes created to make more attributes that wold be helpful down the line:  

* my pending requests  

```
  def my_pending_requests
    object.requests.where(status: "pending")
  end
```  

* my accepted requests
* my rejected requests

***

#### Event - belongs to :user, has many requests

The Event model was important to have date and the number of slots on offer. The idea was that each 'slot' would represent a period of time on that date that could be booked later - something that I knew further down the line would be easy to implement, but for MVP purposes remained as 'slots on offer'.  
Also seeing as each event would be assinged a date I used an update_expired_events method in the application_controller that would be run before_action.  

```
def update_expired_events
	events = Event.where(is_expired: "no").select { |event| event.date < Time.now }
	events.each do |event|
   event.update(is_expired: "yes")
   		p "#{event.user.name}'s event has expired"
   end
end
```

##### Event Serializer

Like the User model I created methods to create more attributes I knew would be useful such as updating the slots_remaining  

```
def slots_remaining
    object.slots_on_offer - object.requests.where(status: "accepted").length
  end
```  
So musicians would not be requesting events that had reached capacity.  

***

#### Request

Although each request belonged to a single user (the musician) and a single event, it was important to then be able to link that event back to the user who had created the event. I think this relationship was the one I struggled with the most. To do so in the model I set up methods that would be run before each request was created - such as:   

```
def set_band_name
    self.band_name = User.find(self.user_id).name
  end

def set_bar_name
  self.bar_name = Event.find(self.event_id).user.name
end  
```
Because it was important to me for the website to have a very easy user journey I made sure to also include the id's of each attribute so that links to those show pages could be implemented.  
In this model after each request was made I also ran the method to check whether the event was at capacity or not.

***

# Project 4 - VeNew ClientSide

### Overview

For my intial concept I knew I wanted to explore the relationships that can be created with Ruby on Rails - so at least three models. I wanted to create a social network between bars and musicians to make small venues and bars more accessible to unsigned artists.

***

### Initial Concept - MVP  

##### User Journey

A bar registers their details, in their profile they will be able to add a time slot.  
When a musician logs in they will can see all the registered venues.  
On that venue show page they can then see the information the venue registered with, a map with their location and any upcoming events.  
If the event is not at full capacity and the musician has not reached their maximum amount of pending requests, then they will be able to request that slot.  
When the Venue logs back in, on their profile they will be able to see their upcoming events and any pending requests from Artists. They can then view that Artists show page, and play their latest Spotify or Souncloud tracks. They are then ablt to accept or reject that request.

***

### Building upon MVP

The MVP was to make the request and then be able to accept or deny this.  
With a simpe MVP I had a lot of room to build upon. Adding functionality I used a spotify widget, soundcloud widget and toggle so that the venue would be able to listen to the most popular tracks of whoever had requested to play. I also added a map for the venue as I  thought it would be important for the Artist to know where the Venue was.  
In terms of the requests I thought it was important to have a maximum amount of pending requests so that the Artist cannot just request to play every event. Building upon this I will also implement that when the Artist has been rejected to play that slot, they are not able to re-request it.  

***

### Wins

Within the timeframe I think a lot was completed, and I'm really happy with the back end functionality seeing as we had only been learning Ruby for a week. Though a lot of features need finishing off I'm happy with the overall functionality on the front-end.

***

### Challenges

This project was a real challenge for me, I think mostly because I had such a big vision of the different components that could be implemented. In hindsight this was too much to complete within a week and so with time I will be really happy when all of the features are polished off. Something I will definetely do is split the views, and controllers into seperate folders based on who is logged in, this is because after all of the features were slowly added the files became very cluttered and by always using 'user' it became unclear who was logged in and what features were being used.

***

### Further Improvements

Due to the timeframe some of the functionality is only half finished, so will definetely be polished off.  The styling also was done in an afternoon and could definetely use some refining.  
Geocoding the autocompleted address for the purposes of using the map will be the first thing. Then with the Venues and Artists locations it would make sense to sort the Venues Index page based on location, or have a form of searching by location.  
Another thing to  implement would be a form of Soundcloud and Spotify Authentication when the Artists, as at the moment the widget is taken from the Artists name, this is then a problem when Souncloud or Spotify use a different name for the Artist. Another feature to add would be an error window when the tracks of the Artist cannot be found.  
Once these features are finished off I think this has possibilities of being built into a whole social network for Events. By implementing a 'normal' User they would be able to search their favourite Musicians to see where they are playing next, and similarly search their favourite Venues for information on upcoming events.
