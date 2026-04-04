export interface SigninPayload {
  email: string;
  password: string;
}

export interface SignupPayload {
  name: string;
  email: string;
  password: string;
  contact: string;
  role: 'student';
}

export interface AuthResponse {
  user: {
    id: string;
    name?: string;
    role?: string;
    [key: string]: any;
  };
  token?: string;
  [key: string]: any;
}

export async function signin(payload: SigninPayload): Promise<AuthResponse> {
  const response = await fetch(`http://localhost:8081/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (response.status === 200) {
    const data: AuthResponse = await response.json();
    // Ensure user object has name property
    if (data.user && !data.user.name) {
      // Check for alternative name fields that backend might use
      data.user.name = data.user.fullName || data.user.full_name || data.user.firstName || '';
    }
    return data;
  }

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Signin failed');
  }

  return response.json();
}

export async function signup(payload: SignupPayload): Promise<AuthResponse> {
  const response = await fetch(`http://localhost:8081/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (response.status === 200) {
    const data: AuthResponse = await response.json();
    // Ensure user object has name property from signup payload
    if (data.user && !data.user.name) {
      data.user.name = data.user.fullName || data.user.full_name || payload.name;
    }
    return data;
  }

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Signup failed');
  }

  return response.json();
}

export async function logout() {
  const response = await fetch('http://localhost:8081/auth/logout',{
    method: 'POST',
  })
  
}
