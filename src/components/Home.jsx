import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home as HomeIcon, Shield, Wrench, MoreHorizontal } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

const services = [
  {
    key: "mortgage",
    title: "Mortgage",
    description:
      "Apply, compare offers, and track your home loan in one place.",
    icon: HomeIcon,
    cta: "Explore Mortgage",
  },
  {
    key: "insurance",
    title: "Insurance",
    description: "Find coverage options for life, auto, and property.",
    icon: Shield,
    cta: "Browse Insurance",
  },
  {
    key: "warranty",
    title: "Warranty",
    description: "Protect big purchases with flexible warranty plans.",
    icon: Wrench,
    cta: "See Warranties",
  },
  {
    key: "others",
    title: "Others",
    description: "Tools, calculators, and more financial services.",
    icon: MoreHorizontal,
    cta: "View All",
  },
];

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-50 to-white p-6 md:p-10">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 md:mb-12">
          <h1 className="text-4xl font-semibold tracking-tight text-blue-900">
            Financial Services
          </h1>
          <p className="mt-2 text-neutral-600">
            Choose a service to get started.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ key, title, description, icon: Icon, cta }) => (
            <motion.div
              key={key}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="h-full"
            >
              <Card className="h-full rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl border bg-white p-2">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl text-blue-900">
                      {title}
                    </CardTitle>
                  </div>
                  <CardDescription className="pt-2 text-neutral-600">
                    {description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0" />
                <CardFooter className="mt-auto">
                  <Button
                    className="rounded-2xl bg-blue-950 hover:bg-blue-900"
                    onClick={() => navigate("/mortgage")}
                  >
                    {cta}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
