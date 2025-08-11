import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CustomAccordionItem = ({ value, header, body }) => {
  return (
    <AccordionItem value={value}>
      <AccordionTrigger className="text-lg font-regular text-blue-950 hover:no-underline">
        {header}
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4 px-2">
        {body}
      </AccordionContent>
    </AccordionItem>
  );
};

export default CustomAccordionItem;
