import { ROLES } from "@/common/constants/about";
import { Button } from "@/components/ui/button";
import Typography from "@/components/ui/typography";
import { ArrowDown, ArrowRight } from "lucide-react";
import Image from "next/image";
import { MdVerified } from "react-icons/md";

const Profile = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-6 gap-10">
      <div className="relative col-span-3 flex items-center justify-center">
        <Image
          src="https://i.pinimg.com/736x/11/a0/9c/11a09c9e8c4a3e99f4b29d299a3f71ca.jpg"
          alt="avatar"
          width={70}
          height={70}
          className="h-80 w-full bg-cover object-cover rounded-2xl border-2"
          loading="lazy"
          unoptimized
        />
      </div>

      <div className="relative col-span-3">
        <div className="flex flex-col gap-4 mb-6">
          <div className="flex gap-1 items-center">
            {ROLES.map((item, index) => {
              return (
                <Typography.Text key={index} variant="xs/normal" className={`${item.color} rounded px-4 py-1.5 flex items-center gap-2`}>
                  <item.icon size={16} />
                  {item.label}
                </Typography.Text>
              );
            })}
          </div>
          <Typography.Title variant="2/black" className="flex items-center gap-2">
            <span>Fajar Fathurrahman</span> <MdVerified size={24} className="text-blue-500" />
          </Typography.Title>
          <Typography.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos molestiae quia ut numquam consectetur sit omnis, nulla aspernatur
            tenetur laborum deserunt illo, a cupiditate, error ad possimus debitis iste doloribus!
          </Typography.Text>
        </div>

        <div className="flex sm:items-center flex-col sm:flex-row gap-2">
          <Button>
            See Portfolio! <ArrowRight />
          </Button>
          <Button variant={'outline'}>
            Whats i created! <ArrowDown />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
