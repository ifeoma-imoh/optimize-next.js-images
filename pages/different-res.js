import Image from "next/image";
export default function DifferentRes() {
  return (
    <Image
      src={
        "https://res.cloudinary.com/ifeomaimoh/image/upload/v1651694150/sea_huykbx.jpg"
      }
      alt={"some sample file"}
      height={500}
      width={800}
      layout="intrinsic"
    />
  );
}
