import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
// import demoLogo from "@/public/demo-logo.jpg";

const demoLogo =
  "https://img.freepik.com/free-vector/creative-gradient-code-logo_23-2148820572.jpg?t=st=1747292748~exp=1747296348~hmac=05fef0386713fe0451832f4b762875fc4ad41dfefac47d63eb5dc05d81951969&w=1380";

const BranchCard = () => {
    return (
    <Card className="w-full bg-white py-4">
      {/* <Image src={demoLogo} alt="demo log" /> */}
      <CardContent className="">
        <div className="flex items-center gap-3 mb-4">
          <Avatar className="h-12 w-12 border-2 border-gray-100">
            <AvatarImage src={demoLogo} />
            <AvatarFallback className="bg-white">
              <svg viewBox="0 0 24 24" className="h-6 w-6">
                <path
                  fill="currentColor"
                  d="M12,2C6.47,2 2,6.47 2,12c0,5.53 4.47,10 10,10s10-4.47 10-10C22,6.47 17.53,2 12,2z M12,20c-4.41,0-8-3.59-8-8c0-4.41 3.59-8 8-8s8,3.59 8,8C20,16.41 16.41,20 12,20z"
                />
              </svg>
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <h2 className="text-xl font-bold">deCoders Clan</h2>
            <p className="text-gray-500 text-sm">ID: #12403</p>
          </div>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex">
            <span className="font-bold text-base">Team Leader: &nbsp;</span>
            <span className="text-base"> Zaman Sheikh</span>
          </div>

          <div className="flex">
            <span className="font-bold text-base">Running Projects: &nbsp;</span>
            <span className="text-base"> 8</span>
          </div>

          <div className="flex">
            <span className="font-bold text-base">Delivered Projects: &nbsp;</span>
            <span className="text-base"> 200</span>
          </div>
          <div className="flex">
            <span className="font-bold text-base">Workload: &nbsp;</span>
            <span className="text-base"> 30k</span>
          </div>
        </div>

        <Separator className=" bg-gray-200" />

        <div className="flex justify-end pt-3">
          <span className="text-gray-500 text-sm">Delivery: 120k/200k</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default BranchCard;