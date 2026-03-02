document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu functionality
  const hamburger = document.querySelector('.hamburger-menu');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (hamburger && mobileMenu) {
      hamburger.addEventListener('click', function() {
          mobileMenu.classList.toggle('active');
      });
  }

  // Content display functionality
  const items = document.querySelectorAll('.item');
  const itemInfo = document.getElementById('item-info');

  if (items.length > 0 && itemInfo) {
      const pageDetails = {
          attractions: {
              beaches: `<h3>Beaches</h3><p>Taniti is renowned for its beautiful white, sandy beaches that encircle Yellow Leaf Bay. These beaches are perfect for sunbathing, swimming, and water activities.</p>`,
              rainforest: `<h3>Rainforest</h3><p>Explore the lush tropical rainforest of Taniti. Enjoy hiking trails, observe diverse wildlife, and experience zip-lining adventures through the canopy.</p>`,
              volcano: `<h3>Active Volcano</h3><p>Visit Taniti's active volcano for a unique and thrilling experience. Guided tours are available to ensure safety while witnessing this natural wonder.</p>`,
              city: `<h3>Taniti City</h3><p>Taniti City boasts native architecture and is where most tourists spend their time. Explore local markets, visit art galleries, and immerse yourself in the island's culture.</p>`,
              tours: `<h3>Island Tours</h3><p>Take boat or bus tours around the island to discover all of Taniti's beauty. Chartered fishing tours and helicopter rides are also available for unique perspectives of the island.</p>`,
              activities: `<h3>Other Activities</h3><p>Taniti offers a wide range of activities including a local history museum, snorkeling, pubs and a microbrewery, a new dance club, movie theater, arcade, bowling, and a nine-hole golf course (coming soon). Many of these activities are located in Merriton Landing, a rapidly developing area on the north side of Yellow Leaf Bay.</p>`
          },
          dining: {
              local: `<h3>Local Cuisine</h3><p>Taniti has five restaurants that serve mostly local fish and rice dishes. These restaurants offer an authentic taste of Tanitian cuisine.</p>`,
              american: `<h3>American-style Cuisine</h3><p>There are three restaurants on Taniti that serve American-style meals, perfect for those looking for familiar flavors.</p>`,
              asian: `<h3>Pan-Asian Cuisine</h3><p>Two restaurants on Taniti serve Pan-Asian cuisine, offering a variety of dishes from different Asian countries.</p>`,
              supermarket: `<h3>Supermarkets</h3><p>Taniti has two supermarkets where you can find a wide variety of groceries and household items.</p>`,
              grocery: `<h3>Grocery Stores</h3><p>There are two smaller grocery stores on the island, offering a more intimate shopping experience.</p>`,
              convenience: `<h3>Convenience Store</h3><p>Taniti has one convenience store that is open 24 hours a day, perfect for late-night needs or quick purchases.</p>`
          },
          accommodations: {
              hostel: `<h3>Hostel</h3><p>For budget-conscious travelers, Taniti offers an inexpensive hostel option. This is perfect for backpackers and those looking to meet other travelers.</p>`,
              resort: `<h3>Four-star Resort</h3><p>Taniti boasts one large, four-star resort for those seeking luxury accommodations. Enjoy top-notch amenities and services during your stay.</p>`,
              'family-hotel': `<h3>Family-owned Hotels</h3><p>There are many small, family-owned hotels across Taniti. These offer a more personal touch and often provide insights into local culture and customs.</p>`,
              bnb: `<h3>Bed and Breakfasts</h3><p>Taniti has a growing number of bed and breakfasts. These provide a cozy, home-like atmosphere and often include homemade local breakfast specialties.</p>`
          },
          transportation: {
              air: `<h3>Air Travel</h3><p>Almost all visitors arrive to Taniti by air. Taniti is served by a small airport that can accommodate small jets and propeller planes. The airport is currently being expanded to accommodate larger jets in the near future.</p>`,
              cruise: `<h3>Cruise Ship</h3><p>Some visitors arrive on a small cruise ship that docks in Yellow Leaf Bay for one night per week.</p>`,
              bus: `<h3>Public Buses</h3><p>Public buses serve Taniti City and run from 5 a.m. to 11 p.m. every day. Private buses serve the rest of the island.</p>`,
              taxi: `<h3>Taxis</h3><p>Taxis are available in Taniti City.</p>`,
              rental: `<h3>Rental Cars</h3><p>Rental cars can be rented from a local rental agency near the airport.</p>`,
              bike: `<h3>Bike Rentals</h3><p>Bikes and helmets are available to rent from several vendors. Helmets are required by law.</p>`
          }
      };

      const pageName = document.body.id;
      const pageContent = pageDetails[pageName];

      items.forEach(item => {
          item.addEventListener('click', function() {
              const itemId = this.getAttribute('data-id');
              const details = pageContent[itemId];

              if (details) {
                  itemInfo.innerHTML = details;
              } else {
                  itemInfo.innerHTML = '<p>Details not available</p>';
              }
          });
      });

      // Additional information for each page
      const additionalInfo = {
          attractions: `<h3>Attraction Overview</h3><p>Taniti offers a diverse range of attractions and activities for visitors, including beautiful beaches, lush rainforests, an active volcano, cultural experiences in Taniti City, various tours, and numerous entertainment options.</p>`,
          dining: `<h3>Dining Overview</h3><p>Taniti offers 10 restaurants in total: 5 local cuisine, 3 American-style, and 2 Pan-Asian cuisine restaurants. For groceries, there are 2 supermarkets, 2 smaller grocery stores, and 1 24-hour convenience store.</p>`,
          accommodations: `<h3>Accommodation Overview</h3><p>Taniti offers a wide variety of lodging options to suit every preference and budget, from hostels to luxury resorts. All accommodations are strictly regulated and regularly inspected by the Tanitian government.</p>`,
          transportation: `<h3>Additional Transportation Information</h3><p>Taniti City is fairly flat and very walkable. Many tourists stay in the area surrounding Merriton Landing, which is easy to explore on foot.</p>`
      };

      itemInfo.innerHTML += additionalInfo[pageName];
  }
});