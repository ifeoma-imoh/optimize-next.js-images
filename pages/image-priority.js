import Image from "next/image";
export default function ImagePriority() {
  return (
    <>
      <Image
        src={
          "https://res.cloudinary.com/ifeomaimoh/image/upload/v1651694150/sea_huykbx.jpg"
        }
        height={500}
        width={800}
        alt={"sea"}
        
      />
      <Image
        src={
          "https://res.cloudinary.com/ifeomaimoh/image/upload/v1651233075/iy7b1t0appthwi9jkqs1.jpg"
        }
        height={500}
        width={800}
        alt={"cheerleaders"}
        priority
      />
    </>
  );
}
