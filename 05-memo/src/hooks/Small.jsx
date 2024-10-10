import React, { memo } from 'react';

export const Small = memo(({ value }) => {
  console.log(':(');
  return (
    <small>{value}</small>
  );
});

// import React from 'react';

// export const Small = ({ value }) => {
//   console.log(':(');
//   return (
//     <small>{value}</small>
//   );
// };