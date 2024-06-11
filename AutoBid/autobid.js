
        let currentBidValues = {
            Car: 300,
            Painting: 150,
            Watch: 50,
            Shoes: 50,
            Phone: 30,
            Guitar: 80
        };
        let biddingActive = {
            Car: true,
            Painting: true,
            Watch: true,
            Shoes: true,
            Phone: true,
            Guitar: true
        };

        function placeBid(item) {
            if (!biddingActive[item]) {
                alert(`Bidding has ended! ${item} is Sold for $${currentBidValues[item]}`);
                return;
            }

            currentBidValues[item] += 10;
            document.getElementById(`currentBid${item}`).textContent = `$${currentBidValues[item]}`;
            document.getElementById(`currentBid${item}`).classList.add('live-bid');
            setTimeout(() => {
                document.getElementById(`currentBid${item}`).classList.remove('live-bid');
            }, 1000);
        }

        // Automatically increase bids every second until bidding ends
        setInterval(() => {
            if (biddingActive.Car) {
                currentBidValues.Car += 10; // Increase Car bid by $10 every second
                document.getElementById('currentBidCar').textContent = `$${currentBidValues.Car}`;
            }

            if (biddingActive.Painting) {
                currentBidValues.Painting += 15; // Increase Painting bid by $15 every second
                document.getElementById('currentBidPainting').textContent = `$${currentBidValues.Painting}`;
            }

            if (biddingActive.Watch) {
                currentBidValues.Watch += 20; // Increase Watch bid by $20 every second
                document.getElementById('currentBidWatch').textContent = `$${currentBidValues.Watch}`;
            }

            if (biddingActive.Shoes) {
                currentBidValues.Shoes += 5; // Increase Shoes bid by $5 every second
                document.getElementById('currentBidShoes').textContent = `$${currentBidValues.Shoes}`;
            }

            if (biddingActive.Phone) {
                currentBidValues.Phone += 25; // Increase Phone bid by $25 every second
                document.getElementById('currentBidPhone').textContent = `$${currentBidValues.Phone}`;
            }

            if (biddingActive.Guitar) {
                currentBidValues.Guitar += 15; // Increase Guitar bid by $15 every second
                document.getElementById('currentBidGuitar').textContent = `$${currentBidValues.Guitar}`;
           

 }
        }, 5000);

        // Simulate bidding ending after different durations for each item
        setTimeout(() => {
            biddingActive.Car = false;
        }, 30000);

        setTimeout(() => {
            biddingActive.Painting = false;
        }, 45000);

        setTimeout(() => {
            biddingActive.Watch = false;
        }, 60000);

        setTimeout(() => {
            biddingActive.Shoes = false;
        }, 35000);

        setTimeout(() => {
            biddingActive.Phone = false;
        }, 55000);

        setTimeout(() => {
            biddingActive.Guitar = false;
        }, 40000);