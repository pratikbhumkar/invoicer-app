interface props {
  headerText: string
}
export const Header = ({ headerText }: props): JSX.Element => {
  return <h1 className="header">{headerText}</h1>
}
