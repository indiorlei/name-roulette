import { DATE_FORMAT_OPTIONS } from '@/utils/date';

export function Footer() {
  return (
    <footer>
      <p>
        {new Date().toLocaleDateString('pt-BR', DATE_FORMAT_OPTIONS)}
      </p>
    </footer>
  );
} 