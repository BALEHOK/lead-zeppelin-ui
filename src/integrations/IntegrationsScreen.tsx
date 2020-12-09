import { Box, Button, TextArea, TextInput } from 'grommet';
import { Copy } from 'grommet-icons';
import React, { MutableRefObject, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IAppState } from 'src/common/state/appContext';
import { withContext } from 'src/common/state/withContext';
import { Section } from 'src/uiKit/section';

export const IntegrationsScreen = ({ account }: IAppState) => {
  const { t } = useTranslation();

  const [siteUrl, setSiteUrl] = useState<string>('https://google.com');
  const [source, setSource] = useState<string>();
  const [medium, setMedium] = useState<string>();
  const [campaign, setCampaign] = useState<string>();
  const [content, setContent] = useState<string>();

  const scriptRef = useRef<HTMLTextAreaElement>();
  const linkRef = useRef<HTMLInputElement>();

  const buildSctipt = () => {
    return `<script src="https://lead-zeppelin-server-v2.herokuapp.com/tracking.js?code=${account.code}"></script>`;
  };

  const buildUrl = () => {
    const utm = [];
    if (source) {
      utm.push('utm_source=' + source);
    }
    if (medium) {
      utm.push('utm_medium=' + medium);
    }
    if (campaign) {
      utm.push('utm_campaign=' + campaign);
    }
    if (content) {
      utm.push('utm_content=' + content);
    }
    const params = utm.join('&');
    return siteUrl + (params ? `?${params}` : '');
  };

  const copyValue = (
    ref:
      | MutableRefObject<HTMLTextAreaElement>
      | MutableRefObject<HTMLInputElement>
  ) => {
    if (!ref.current) {
      return;
    }

    const element = ref.current;
    element.disabled = false;
    element.select();
    element.setSelectionRange(0, 99999); /*For mobile devices*/
    document.execCommand('copy');
    element.disabled = true;
  };

  return (
    <Box align="start" justify="center" gap="xlarge">
      <Section
        heading={t('integrations.scriptHeading')}
        subHeading={t('integrations.scriptSub')}
      >
        <Box direction="row" gap="medium" align="center">
          <TextArea
            ref={scriptRef as any}
            value={buildSctipt()}
            disabled
            style={{ opacity: 1, width: 400 }}
            resize={false}
            size="xsmall"
            rows={2}
          />
          <Button
            label={t('general.copy')}
            icon={<Copy />}
            onClick={() => copyValue(scriptRef)}
          />
        </Box>
      </Section>

      <Section
        heading={t('integrations.linksHeading')}
        subHeading={t('integrations.linksSub')}
      >
        <Box margin={{ bottom: 'medium' }}>
          <TextInput
            placeholder="utm_content"
            value={siteUrl}
            onChange={(e) => setSiteUrl(e.target.value)}
          />
        </Box>
        <Box gap="small">
          <TextInput
            placeholder="utm_source"
            value={source}
            onChange={(e) => setSource(e.target.value)}
          />
          <TextInput
            placeholder="utm_medium"
            value={medium}
            onChange={(e) => setMedium(e.target.value)}
          />
          <TextInput
            placeholder="utm_campaign"
            value={campaign}
            onChange={(e) => setCampaign(e.target.value)}
          />
          <TextInput
            placeholder="utm_content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </Box>
        <Box direction="row" gap="medium" align="center">
          <TextInput
            ref={linkRef as any}
            value={buildUrl()}
            disabled
            size="xsmall"
            style={{ opacity: 1, width: 400 }}
          />
          <Button
            label={t('general.copy')}
            icon={<Copy />}
            onClick={() => copyValue(linkRef)}
          />
        </Box>
      </Section>
    </Box>
  );
};

export default withContext(IntegrationsScreen);
