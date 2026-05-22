export function NavIcon({ type }: { type: string }) {
  const props = {
    width: 17,
    height: 16,
    viewBox: "0 0 17 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  };
  switch (type) {
    case "home":
      return (
        <svg {...props}>
          <path
            d="M2.5 5.99998L8.5 1.33331L14.5 5.99998V13.3333C14.5 13.6869 14.3595 14.0261 14.1095 14.2761C13.8594 14.5262 13.5203 14.6666 13.1667 14.6666H3.83333C3.47971 14.6666 3.14057 14.5262 2.89052 14.2761C2.64048 14.0261 2.5 13.6869 2.5 13.3333V5.99998Z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.5 14.6667V8H10.5V14.6667"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "about":
      return (
        <svg {...props}>
          <path
            d="M13.8334 14V12.6667C13.8334 11.9594 13.5525 11.2811 13.0524 10.781C12.5523 10.281 11.874 10 11.1667 10H5.83341C5.12617 10 4.44789 10.281 3.9478 10.781C3.4477 11.2811 3.16675 11.9594 3.16675 12.6667V14"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.49992 7.33333C9.97268 7.33333 11.1666 6.13943 11.1666 4.66667C11.1666 3.19391 9.97268 2 8.49992 2C7.02716 2 5.83325 3.19391 5.83325 4.66667C5.83325 6.13943 7.02716 7.33333 8.49992 7.33333Z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "services":
      return (
        <svg {...props}>
          <path
            d="M13.8333 1.33331H3.16659C2.43021 1.33331 1.83325 1.93027 1.83325 2.66665V5.33331C1.83325 6.06969 2.43021 6.66665 3.16659 6.66665H13.8333C14.5696 6.66665 15.1666 6.06969 15.1666 5.33331V2.66665C15.1666 1.93027 14.5696 1.33331 13.8333 1.33331Z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.8333 9.33331H3.16659C2.43021 9.33331 1.83325 9.93027 1.83325 10.6666V13.3333C1.83325 14.0697 2.43021 14.6666 3.16659 14.6666H13.8333C14.5696 14.6666 15.1666 14.0697 15.1666 13.3333V10.6666C15.1666 9.93027 14.5696 9.33331 13.8333 9.33331Z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <path d="M8.49927 2L2.49927 5L8.49927 8L14.4993 5L8.49927 2Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2.49927 11L8.49927 14L14.4993 11" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2.49927 8L8.49927 11L14.4993 8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
}

export function ArrowIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M6.98028 3.03425C7.43 3.48397 8.49437 3.76269 9.45568 3.92871C10.6943 4.14476 11.9398 4.1684 13.1245 3.95223C14.0127 3.79008 14.9979 3.50192 15.5102 2.98959M15.5102 2.98959C14.9979 3.50192 14.7092 4.48762 14.5476 5.37533C14.332 6.56064 14.3557 7.80616 14.5705 9.04352C14.7371 10.0054 15.0171 11.071 15.4656 11.5195M15.5102 2.98959L3.4894 15.0104"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function ServiceIcon({ type }: { type: string }) {
  const p = { width: 40, height: 40, viewBox: "0 0 40 40", fill: "none" };
  switch (type) {
    case "layers":
      return (
        <svg {...p}>
          <path d="M19.9994 6.66663L6.66602 13.3333L19.9994 20L33.3327 13.3333L19.9994 6.66663Z" fill="currentColor" />
          <path d="M6.66602 26.6666L19.9994 33.3333L33.3327 26.6666" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6.66602 20L19.9994 26.6667L33.3327 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "mobile":
      return (
        <svg {...p}>
          <path d="M15.6667 7H9.88889C9.12271 7 8.38791 7.30436 7.84614 7.84614C7.30436 8.38791 7 9.12271 7 9.88889V15.6667M15.6667 7H30.1111C30.8773 7 31.6121 7.30436 32.1539 7.84614C32.6956 8.38791 33 9.12271 33 9.88889V15.6667M15.6667 7V33M7 15.6667V30.1111C7 30.8773 7.30436 31.6121 7.84614 32.1539C8.38791 32.6956 9.12271 33 9.88889 33H15.6667M7 15.6667H33M33 15.6667V30.1111C33 30.8773 32.6956 31.6121 32.1539 32.1539C31.6121 32.6956 30.8773 33 30.1111 33H15.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return (
        <svg {...p}>
          <path d="M30.8889 6H9.11111C7.39289 6 6 7.39289 6 9.11111V30.8889C6 32.6071 7.39289 34 9.11111 34H30.8889C32.6071 34 34 32.6071 34 30.8889V9.11111C34 7.39289 32.6071 6 30.8889 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
}
