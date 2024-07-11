const Menu = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x="4" y="10" width="40" height="4" fill="#2E2F35" />
      <rect x="4" y="22" width="40" height="4" fill="#2E2F35" />
      <rect x="4" y="34" width="40" height="4" fill="#2E2F35" />
    </svg>
  );
};
export default Menu;
