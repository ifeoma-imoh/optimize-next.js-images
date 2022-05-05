import Image from "next/image";
export default function Unoptimized() {
  return (
    <>
      <Image
        src={
          "https://res.cloudinary.com/ifeomaimoh/image/upload/v1651694150/sea_huykbx.jpg"
        }
        alt={"sample file"}
        unoptimized={true}
        height={500}
        width={800}
        layout='intrinsic'
      />
    </>
  );
}
