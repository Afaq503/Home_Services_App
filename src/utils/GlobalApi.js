import { request, gql } from "graphql-request";

const MASTER_URL =
  "https://api-ap-south-1.hygraph.com/v2/cltih573r0hw907wip4bbwl39/master";

const getSlider = async () => {
  const query = gql`
    query GetSlider {
      sliders {
        id
        name
        image {
          url
        }
      }
    }
  `;

  const result = await request(MASTER_URL, query);

  return result;
};

const getCategories = async () => {
  const query = gql`
    query GetCategory {
      categories {
        id
        name
        icon {
          url
        }
      }
    }
  `;

  const result = await request(MASTER_URL, query);

  return result;
};
const getBusinessList = async () => {
  const query = gql`
    query getBusinessList {
      businessLists {
        id
        name
        email
        contactPerson
        address
        category {
          name
        }
        about
        images {
          url
        }
      }
    }
  `;

  const result = await request(MASTER_URL, query);

  return result;
};
const getBusinessListByCategory = async (category) => {
  const query =
    gql`
    query getBusinessList {
      businessLists(where: {category: {name: "` +
    category +
    `"}}) {
        id
        name
        email
        contactPerson
        address
        category {
          name
        }
        about
        images {
          url
        }
      }
    }
    
      
    `;

  const result = await request(MASTER_URL, query);

  return result;
};

const createBooking = async (data) => {
  const mutationQuery = gql`
    mutation CreateBooking($data: BookingCreateInput!) {
      createBooking(data: $data) {
        id
      }
      publishManyBookings(to: PUBLISHED) {
        count
      }
    }
  `;

  // Define the variables object to pass the data
  const variables = {
    data: {
      date: data.date,
      time: data.time,
      businessList: { connect: { id: data.businessId } },
      userEmail: data.userEmail,
      userName: data.userName,
      bookingStatus: 'Booked' // Make sure to wrap 'Booked' in quotes
    }
  };

  try {
    // Send the mutation request with variables
    const result = await request(MASTER_URL, mutationQuery, variables);
    return result;
  } catch (error) {
    // Handle any errors
    console.error('Error creating booking:', error);
    throw error; // Rethrow the error for handling in the calling code
  }
};
// const createBooking = async (data) => {
//   const mutationQuery = gql`
//   createBooking(
//     data: {
//       date: "`+data.date+`",
//       time: "`+data.time+`",
//       businessList: {connect: {id: "`+data.businessId+`"}}, 
//       userEmail: "`+data.userEmail+`",
//       userName: "`+data.userName+`", 
//       bookingStatus: 'Booked'
//     }
//   ) {
//     id
//   }
//   publishManyBookings(to: PUBLISHED) {
//     count
//   }
// }

//   `;
//   const result = await request(MASTER_URL, mutationQuery);

//   return result;
// };

export default {
  getSlider,
  getCategories,
  getBusinessList,
  getBusinessListByCategory,
  createBooking,
};
