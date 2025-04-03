import { memo } from "react";

type Props = {
  className?: string;
};

export const LogoFacebook = memo(({ className }: Props) => {
  return (
    <svg role="img" className={className} viewBox="0 0 24 24" fill="none">
      <title>Facebook</title>
      <path
        d="M20.6256 2.62939H3.37561C2.96077 2.62939 2.62561 2.96455 2.62561 3.37939V20.6294C2.62561 21.0442 2.96077 21.3794 3.37561 21.3794H20.6256C21.0405 21.3794 21.3756 21.0442 21.3756 20.6294V3.37939C21.3756 2.96455 21.0405 2.62939 20.6256 2.62939ZM18.46 8.10205H16.9623C15.7881 8.10205 15.5608 8.65986 15.5608 9.48018V11.2872H18.3639L17.9983 14.1161H15.5608V21.3794H12.6381V14.1185H10.1936V11.2872H12.6381V9.20127C12.6381 6.78018 14.117 5.46064 16.278 5.46064C17.3139 5.46064 18.2022 5.53799 18.4623 5.57314V8.10205H18.46Z"
        fill="#EBD5D1"
        fillOpacity="0.62"
      />
    </svg>
  );
});

LogoFacebook.displayName = "LogoFacebook";
