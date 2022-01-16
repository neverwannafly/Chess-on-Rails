import React from 'react';
import classNames from 'classnames';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import Divider from '@app/pages/auth/Divider';

function AuthForm({
  handleUpdate,
  handleSubmit,
  formActionLabel,
  formSwitchLabel,
  formFields,
  handleFormSwitch,
  cardClassName,
}) {
  return (
    <div className="auth-form__container white">
      <form className="auth-form" onSubmit={handleSubmit}>
        <div
          className={classNames(
            'auth-form__card',
            { [cardClassName]: cardClassName },
          )}
        >
          {formFields.map(({ key, label }) => (
            <TextField
              key={key}
              margin="normal"
              label={label}
              onChange={handleUpdate(key)}
            />
          ))}
          <Button
            className="auth-form__submit"
            variant="contained"
            type="submit"
          >
            {formActionLabel}
          </Button>
          <Divider />
          <Button
            variant="contained"
            color="success"
            onClick={handleFormSwitch}
          >
            {formSwitchLabel}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default AuthForm;
