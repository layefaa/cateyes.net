import React from 'react';

const ErrorMessage = ({error}: { error: string }) => {
  return (
      <span>
        {error}
      </span>
  );
};

export default ErrorMessage;
