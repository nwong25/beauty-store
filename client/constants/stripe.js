const STRIPE_PUBLISHABLE =
  process.env.NODE_ENV === 'production'
    ? 'pk_test_51HQewQI4TnZxryH23TE2bbMbXc1eaA8XjeeFsQyzvtpGSDYb4FFnV68jpOFoDtJdALtD1SgAEXrfafT3EKvFN4VP00S6bNyEOs'
    : 'pk_test_51HQewQI4TnZxryH23TE2bbMbXc1eaA8XjeeFsQyzvtpGSDYb4FFnV68jpOFoDtJdALtD1SgAEXrfafT3EKvFN4VP00S6bNyEOs'

export default STRIPE_PUBLISHABLE
