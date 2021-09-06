import React, { Suspense, lazy } from "react";

const ArticleForm = lazy(() => import('./core/EventForm'));

import './styles/register.styles.scss';
const Register = () => {
  return (
    <div>
      <div className="register-form">
        <Suspense fallback={<div>Loading...</div>}>
          <ArticleForm/>
        </Suspense>
      </div>
    </div>
    
  )
}

export default Register;