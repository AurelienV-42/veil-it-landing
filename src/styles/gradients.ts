export const gradients = {
  // Text gradients
  text: {
    primary: 'bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent',
  },

  // Background gradients
  background: {
    primary: 'bg-gradient-to-b from-blue-50 via-white to-blue-50/30',
  },

  // Border gradients
  border: {
    primary: 'bg-gradient-to-r from-blue-500 via-orange-300 to-teal-500',
  },
} as const;
