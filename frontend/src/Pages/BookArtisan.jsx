import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';
import '../styles/BookArtisan.css';

const BookArtisan = () => {
    const { id } = useParams();
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [message, setMessage] = useState('');
    const [artisanDetails, setArtisanDetails] = useState({});

    useEffect(() => {
        // Simulate fetching artisan details from an API or a database
        const fetchArtisanDetails = async () => {
            try {
                // Assuming there's a function to fetch artisan details by ID
                // const details = await fetchArtisanDetailsById(id);
                // setArtisanDetails(details);
            } catch (error) {
                console.error('Error fetching artisan details:', error);
            }
        };

        fetchArtisanDetails();
    }, [id]);

    const handleBooking = (e) => {
        e.preventDefault();
        console.log(`Booking artisan ID: ${id}, Date: ${date}, Time: ${time}`);
        setMessage('Booking successful!');
    };

    return (
        <div>
            <Header />
            <div className="booking-page">
                <h1>Book Artisan</h1>
                <div>
                    <h2>Artisan Details:</h2>
                    <p>Name: {artisanDetails.name}</p>
                    <p>Category: {artisanDetails.category}</p>
                    <p>Location: {artisanDetails.location}</p>
                </div>
                <form onSubmit={handleBooking}>
                    <div>
                        <label htmlFor="date">Select Date:</label>
                        <input
                            type="date"
                            id="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="time">Select Time:</label>
                        <input
                            type="time"
                            id="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Confirm Booking</button>
                </form>
                {message && <p>{message}</p>}
            </div>
            <Footer />
        </div>
    );
};

export default BookArtisan;
