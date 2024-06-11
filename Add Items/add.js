document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const submittedDataDiv = document.getElementById('submittedData');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      // Get form values
      const itemName = form.elements.item_name.value;
      const description = form.elements.description.value;
      const startingPrice = parseFloat(form.elements.starting_price.value);
      const reservePrice = parseFloat(form.elements.reserve_price.value);
      const endDate = new Date(form.elements.end_date.value);
      const imageFile = form.elements.image_upload.files[0];
  
      // Store data in an object 
      const auctionData = {
        itemName: itemName,
        description: description,
        startingPrice: startingPrice,
        reservePrice: reservePrice,
        endDate: endDate.toISOString(),
        imageFile: imageFile.name, // You may choose to store the image file differently, like uploading it to a server
      };
  
      // Display submitted data in the div
      submittedDataDiv.innerHTML += `
        <h2>Submitted Auction Data:</h2>
        <p><strong>Item Name:</strong> ${auctionData.itemName}</p>
        <p><strong>Description:</strong> ${auctionData.description}</p>
        <p><strong>Starting Price:</strong> $${auctionData.startingPrice.toFixed(2)}</p>
        <p><strong>Reserve Price:</strong> $${auctionData.reservePrice.toFixed(2)}</p>
        <p><strong>End Date:</strong> ${endDate.toDateString()} ${endDate.toLocaleTimeString()}</p>
        <p><strong>Image File:</strong> ${auctionData.imageFile}</p>
        <hr>
      `;
     
      submittedDataDiv.style.color = "white";


      alert("Data Added Successfully");
  
      // Optionally, you can clear the form fields manually if needed
      form.reset();
    });
  });
  