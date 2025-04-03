import { memo } from "react";

type Props = {
  className?: string;
};

export const LogoX = memo(({ className }: Props) => {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M13.6759 10.6631L20.229 3.20361H18.6767L12.9843 9.67924L8.44111 3.20361H3.19983L10.0715 12.9968L3.19983 20.8183H4.75215L10.7596 13.9783L15.5585 20.8183H20.7998M5.31242 4.34996H7.69722L18.6755 19.7283H16.2901"
        fill="#EBD5D1"
        fillOpacity="0.62"
      />
    </svg>
  );
});

LogoX.displayName = "LogoX";
