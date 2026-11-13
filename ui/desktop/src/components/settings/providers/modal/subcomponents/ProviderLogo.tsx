import OpenAILogo from './icons/[REDACTED_EMAIL]';
import AnthropicLogo from './icons/[REDACTED_EMAIL]';
import GoogleLogo from './icons/[REDACTED_EMAIL]';
import GroqLogo from './icons/[REDACTED_EMAIL]';
import OllamaLogo from './icons/[REDACTED_EMAIL]';
import DatabricksLogo from './icons/[REDACTED_EMAIL]';
import OpenRouterLogo from './icons/[REDACTED_EMAIL]';
import SnowflakeLogo from './icons/[REDACTED_EMAIL]';
import XaiLogo from './icons/[REDACTED_EMAIL]';
import MiniMaxLogo from './icons/[REDACTED_EMAIL]';
import TanzuLogo from './icons/[REDACTED_EMAIL]';
import AzureFoundryLogo from './icons/[REDACTED_EMAIL]';
import DefaultLogo from './icons/[REDACTED_EMAIL]';
import { defineMessages, useIntl } from '../../../../../i18n';

const i18n = defineMessages({
  logoAlt: {
    id: 'providerLogo.alt',
    defaultMessage: '{providerName} logo',
  },
});

// Map provider names to their logos
const providerLogos: Record<string, string> = {
  openai: OpenAILogo,
  anthropic: AnthropicLogo,
  google: GoogleLogo,
  groq: GroqLogo,
  ollama: OllamaLogo,
  databricks: DatabricksLogo,
  openrouter: OpenRouterLogo,
  snowflake: SnowflakeLogo,
  xai: XaiLogo,
  minimax: MiniMaxLogo,
  tanzu_ai: TanzuLogo,
  azure_foundry: AzureFoundryLogo,
  default: DefaultLogo,
};

interface ProviderLogoProps {
  providerName: string;
}

export default function ProviderLogo({ providerName }: ProviderLogoProps) {
  const intl = useIntl();
  // Convert provider name to lowercase and fetch the logo
  const logoKey = providerName.toLowerCase();
  const logo = providerLogos[logoKey] || DefaultLogo;

  // Special handling for xAI logo
  const isXai = logoKey === 'xai';
  const imageStyle = isXai ? { filter: 'invert(1)', opacity: 0.9 } : {};

  // Use smaller size for xAI logo to fit better in circle
  const imageClassName = isXai
    ? 'w-8 h-8 object-contain' // Smaller size for xAI
    : 'w-16 h-16 object-contain'; // Default size for others

  return (
    <div className="flex justify-center mb-2">
      <div className="w-12 h-12 bg-black rounded-full overflow-hidden flex items-center justify-center">
        <img
          src={logo}
          alt={intl.formatMessage(i18n.logoAlt, { providerName })}
          className={imageClassName}
          style={imageStyle}
        />
      </div>
    </div>
  );
}
