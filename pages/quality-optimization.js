import Image from "next/image";
export default function QualityOptimization() {
  return (
    <>
      <Image
        src={
          "https://res.cloudinary.com/ifeomaimoh/image/upload/v1651694150/sea_huykbx.jpg"
        }
        alt={"sample file"}
        height={500}
        width={800}
        layout={"responsive"}
        sizes={"100vw"}
        quality={50}
      />
    </>
  );
}
