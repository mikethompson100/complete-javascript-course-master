describe('getEvents', () => {
    Test("Returns events with ticket prices less than 30", () => {
        const searchPredicateMock = jest.fn(e => e.ticketPrice < 30);

        const expectedEvent1 = new Event(1, "Pop goes Punk!", 20.00, 1000, 1000);
        const expectedEvent2 = new Event(4, "Party like it's 1999!", 10.00, 1000, 1000);
        const expectedEvent3 = new Event(7, "Raven says Nevermore", 29.99, 1000, 1000);
        
        const events = [
            expectedEvent1,
            new Event(2, "The Music of the Elders", 70.00, 1000, 1000),
            new Event(3, "Glastonbury 2025", 250.00, 1000, 1000),
            expectedEvent2,
            new Event(5, "Radio Tunes Extravaganza", 50.00, 1000, 1000),
            new Event(6, "Jump Around", 30.01, 1000, 1000),
            expectedEvent3
        ]

        const filterResults = getEvents(events, searchPredicateMock);

        expect(filterResults).toEqual([expectedEvent1, expectedEvent2, expectedEvent3]);

        expect(searchPredicateMock).toHaveBeenCalled();

        expect(searchPredicateMock.mock.calls.length).toBe(7);

        expect(searchPredicateMock.mock.calls[0][0]).toBe(events[0]);
    });
});

