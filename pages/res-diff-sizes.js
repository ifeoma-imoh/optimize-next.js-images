import Image from "next/image";
export default function ResDiffSizes() {
  return (
    <>
      <Image
        src={
          "https://res.cloudinary.com/ifeomaimoh/image/upload/v1651694150/sea_huykbx.jpg"
        }
        alt={"some sample file"}
        height={500}
        width={800}
        layout={"responsive"}
        sizes="(max-width:3000px) 10vw"
      />
    </>
  );
}
