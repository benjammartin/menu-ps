type LogoProps = {
  logo: string;
};

export const Logo = (props: LogoProps) => {
  console.log(props);
  return <img src={props.logo} />;
};
