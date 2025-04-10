
import { Code2, FileCode, Database, BarChart3, LineChart, Figma } from "lucide-react";

interface SkillIconProps {
  name: string;
}

const SkillIcon = ({ name }: SkillIconProps) => {
  const renderIcon = () => {
    switch (name.toLowerCase()) {
      case "html":
        return <Code2 className="w-8 h-8 text-[#E44D26]" />;
      case "css":
        return <FileCode className="w-8 h-8 text-[#1572B6]" />;
      case "javascript":
        return <FileCode className="w-8 h-8 text-[#F7DF1E]" />;
      case "python":
        return (
          <div className="flex items-center justify-center w-8 h-8 bg-[#3776AB] text-white rounded-sm">
            <span className="font-bold text-xs">Py</span>
          </div>
        );
      case "sql":
        return <Database className="w-8 h-8 text-[#336791]" />;
      case "looker studio":
        return <BarChart3 className="w-8 h-8 text-[#4285F4]" />;
      case "tableau":
        return <LineChart className="w-8 h-8 text-[#E97627]" />;
      case "figma":
        return <Figma className="w-8 h-8 text-[#F24E1E]" />;
      default:
        return <div className="w-8 h-8 bg-gray-200 rounded" />;
    }
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="p-3 rounded-lg bg-white shadow-sm border border-gray-100 card-hover">
        {renderIcon()}
      </div>
      <span className="text-xs text-gray-600">{name}</span>
    </div>
  );
};

export default SkillIcon;
