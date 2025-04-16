// File: src/pages/RSVP.js
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './RSVP.css';

const guestMap = {
  'Penny Ouellette': ['Greg Ouellette', 'Aayden Ouellette'],
  'Greg Ouellette': ['Penny Ouellette', 'Aayden Ouellette'],
  'Aayden Ouellette': [],
  'Makayla Odell': ['Guest'],
  'Brandy Hewitt': ['Danny Hewiit','Logan Hewitt', 'Ethan Hewitt'],
  'Danny Hewitt': ['Brandy Hewitt','Logan Hewitt', 'Ethan Hewitt'],
  'Carolyn Johnson': [],
  'Terry Hardin': [],
  'Cliff Jones': [],
  'Carlene Ouellette': [],
  'Nick Jones': ['Heidi', 'Ramsey', 'Simmons'],
  'Alicia Romano': ['Sal Ramono', 'Jake Ramono'],
  'Sal Romano': ['Alicia Romano', 'Jake Ramono'],
  'Luke Ramono': ['Guest'],
  'Jessica Ouellette': ['Blake Resnick'],
  'Geoff Ouellette': ['Fawn Ouellette'],
  'Fawn Ouellette': ['Geoff Ouellette'],
  'Mikey Ouellette': ['Guest'],
  'Ike Roloue': [],
  'Ella Hendrix': ['Matt Hendrix', 'Sutton Hendrix'],
  'Matt Hendrix': ['Ella Hendrix', 'Sutton Hendrix'],
  'Marissa Turner': [],
  'Marty Turner': ['Melody Turner'],
  'Melody Turner': ['Marty Turner'],
  'Maddie Rainwater': ['Jacob Depolo'],
  'Emily Mejia': ['Joaquin Mejia'],
  'Joaquin Mejia': ['Emily Mejia'],
  'Emily Bennet': ['Andrew Bennet', 'Knox Bennet'],
  'Andrew Bennet': ['Emily Bennet', 'Knox Bennet'],
  'Ricki Caroline Collins': [],
  'Savana Milton': [],
  'Isaiah Galvan ': [],
  'Steve Strickland': ['Steves guest'],
  'Brynn Chavira': ['Spencer Hurst'],
  'Spencer Hurst': ['Brynn Chavira'],
  'Kyle Briggs': ['Carly Rushing'],
  'Carly Rushing': ['Kyle Briggs'],
  'Danita Morgan': ['Mike Morgan', 'Malia Morgan'],
  'Malia Morgan': [],
  'Mike Morgan': ['Danita Morgan, Malia Morgan'],
  'Will Maness': ['JoAnna Smith', 'Lucy'],
  'JoAnna Smith': ['Will Maness', 'Lucy'],
  'Adam Kramer': ['Skylar Kramer'],
  'Skylar Kramer': ['Adam Kramer'],
  'Patrick Raby': ['Guest'],
  'Eveon Duncan': ['Marty'],
  'Gibson Miller': ['Guest'],
  'Tami Kraus': ['Rick Kraus'],
  'Rick Kraus': ['Tami Kraus'],
  'Jan West': ['Guest'],
  'Joesph Ouellette': [],
  'Ethan Miller': ['Kenzie Walters'],
  'Kenzie Walters': ['Ethan Miller'],
  'Jessica Jagger': ['RJ Myers'],
  'Jacklyn Young': [],
  'Brenda Duke': [],
  'Sherri Gross': ['John Gross'],
  'Daniel Gross': [],
  'Ashely Gross': ['Fammily'],
  'Jill Birdwell': ['Don Birdwell'],
  'Don Birdwell': ['Jill Birdwell'],
  'Leveda Birdwell': [],
  'Tyler Birdwell': ['Terann Birdwell', 'Clark Birdwell', 'Barnes Birdwell', 'Woods Birdwell'],
  'Terann Birdwell': ['Tyler Birdwell', 'Clark Birdwell', 'Barnes Birdwell', 'Woods Birdwell']
};

const guestList = Object.keys(guestMap);

const sanitizeInput = (input) => {
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML.trim();
  };
const RSVP = () => {
  const [search, setSearch] = useState('');
  const [selectedGuest, setSelectedGuest] = useState('');
  const [partyNames, setPartyNames] = useState([]);
  const [isAttending, setIsAttending] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [dietary, setDietary] = useState('');
  const [song, setSong] = useState('');

  const filteredGuests = search.trim()
  ? guestList.filter((name) =>
      name.toLowerCase().includes(search.toLowerCase())
    )
  : [];

  const preloadParty = (guest) => {
    const party = guestMap[guest] || [];
    setPartyNames(party.map(name => ({ name, response: '' })));
  };

  const updatePartyResponse = (index, response) => {
    const updatedParty = [...partyNames];
    updatedParty[index].response = response;
    setPartyNames(updatedParty);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('entry.1955179773', sanitizeInput(selectedGuest));
    formData.append('entry.877086558', sanitizeInput(isAttending));
    formData.append(
      'entry.1498135098',
      partyNames.map(p => `${sanitizeInput(p.name)}: ${sanitizeInput(p.response || 'No response')}`).join(', ')
    );
    formData.append('entry.2606285', sanitizeInput(dietary));
    formData.append('entry.1561768029', sanitizeInput(song));

    fetch('https://docs.google.com/forms/u/0/d/e/1FAIpQLScXyMSAlSWMrF2YpnEIgbHjG9kPSSish3pb1s_gdmUFF_r-cg/formResponse', {
      method: 'POST',
      mode: 'no-cors',
      body: formData
    }).then(() => {
      setSubmitted(true);
    });
  };

  return (
    <div className="background-wrapper"> 
      <section className="text-center py-5">
        <div className="container events-container">
          <div className="container rsvp-container">
            <h2 className='rsvp-font'>RSVP</h2>
            <p className="location-date">Lexi & Mason's Wedding</p>
            <p className="location-date">If you're responding for you and a guest (or your family), you'll be able to RSVP for your entire group.</p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="rsvp-form">
                {!selectedGuest ? (
                  <>
                    <input
                      type="text"
                      className="form-control mb-3"
                      placeholder="Find your name..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                {search.length > 0 && filteredGuests.length > 0 && (
                <ul className="list-group guest-list">
                    {filteredGuests.map((guest, index) => (
                    <li
                        key={index}
                        className="list-group-item list-group-item-action"
                        onClick={() => {
                        setSelectedGuest(guest);
                        preloadParty(guest);
                        }}
                    >
                        {guest}
                    </li>
                    ))}
                </ul>
                )}
                <br/>
             <p className="location-date">If you need to change your RSVP, please text (615) 633-5265.</p>
                  </>
                ) : (
                  <>
                    <div className='guest-response mb-3'>
                      <div className="rsvp-row">
                        <span className="rsvp-name">{selectedGuest}</span>
                        <div className="d-flex gap-2">
                          <Button
                            variant="outline-dark"
                            className={`rsvp-buttons ${isAttending === "Yes,  I'll be there" ? 'active' : ''}`}
                            onClick={() => setIsAttending("Yes,  I'll be there")}
                          >
                            Accept
                          </Button>
                          <Button
                            variant="outline-dark"
                            className={`rsvp-buttons ${isAttending === "Sorry, can't make it" ? 'active' : ''}`}
                            onClick={() => setIsAttending("Sorry, can't make it")}
                          >
                            Decline
                          </Button>
                        </div>
                      </div>
                    </div>

                    {partyNames.map((guest, idx) => (
                      <div key={idx} className="guest-response mb-3">
                        <div className="rsvp-row">
                          <span className="rsvp-name">{guest.name}</span>
                          <div className="d-flex gap-2">
                            <Button
                              variant="outline-dark"
                              className={`rsvp-buttons ${guest.response === "Yes,  I'll be there" ? 'active' : ''}`}
                              onClick={() => updatePartyResponse(idx, "Yes,  I'll be there")}
                            >
                              Accept
                            </Button>
                            <Button
                              variant="outline-dark"
                              className={`rsvp-buttons ${guest.response === "Sorry, can't make it" ? 'active' : ''}`}
                              onClick={() => updatePartyResponse(idx, "Sorry, can't make it")}
                            >
                              Decline
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}

                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Dietary restrictions (optional)"
                        value={dietary}
                        onChange={(e) => setDietary(e.target.value)}
                      />
                    </div>

                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Song request (optional)"
                        value={song}
                        onChange={(e) => setSong(e.target.value)}
                      />
                    </div>

                    <Button variant="outline-dark" type="submit" className="continue-button" disabled={!isAttending}>
                      CONTINUE
                    </Button>
                  </>
                )}
              </form>
            ) : (
              <div className="alert alert-success mt-4 text-start" role="alert">
                <h4 className="mb-3">Thank you! Your RSVP has been submitted.</h4>
                <p><strong>{selectedGuest}</strong>: {isAttending}</p>
                {partyNames.length > 0 && (
                  <>
                    <h5 className="mt-4">Party Responses:</h5>
                    <ul className="list-group mb-3">
                      {partyNames.map((guest, i) => (
                        <li key={i} className="list-group-item d-flex justify-content-between">
                          <span>{guest.name}</span>
                          <span>{guest.response || 'No response'}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                {dietary && <p><strong>Dietary Restrictions:</strong> {dietary}</p>}
                {song && <p><strong>Song Request:</strong> {song}</p>}
                <div className="text-center mt-4">
                  <a href="/home" className="btn btn-outline-secondary">Return Home</a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RSVP;
