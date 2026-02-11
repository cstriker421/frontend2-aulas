type WelcomeProps = {
  user: string;
};

const Welcome = ({ user }: WelcomeProps) => {
  return <h2>Welcome, {user}</h2>;
};

export default Welcome;
