# Service pages — open questions (missing facts)

Every field in `data/services/service-facts.json` is currently **null**. Per the "never
fabricate facts" rule, no service page states any of these things until they are confirmed.
Each entry below lists the fact, why it matters, and which pages/blocks need it. Fill in the
value in `service-facts.json` and the fact can be woven into the listed pages.

Status key: **open** = awaiting answer, **not-applicable** = intentionally unused.

| Fact (`service-facts.json` key) | Status | Why it matters | Pages/blocks that need it |
| --- | --- | --- | --- |
| `pricingModel` | open | Customers ask how pricing works (retainer, project, hourly, from-$). Pages avoid all price claims until confirmed. | All 19 new service pages; `/services` hub; FAQ answers about cost |
| `packages` | open | Whether defined tiers exist and what they include. | `/seo`, `/web-design`, child service pages, `/services` hub |
| `toolsAndPlatforms` | open | Naming the tools/platforms we actually use (avoid implying partner status). | `/seo/technical-seo`, `/seo/link-building`, `/seo/content-writing`, `/ai-search`, `/digital-marketing`, `/ecommerce-marketing`, `/web-design` |
| `hostingProvider` | open | `/web-design/website-hosting` must not name a provider it cannot confirm. | `/web-design/website-hosting` |
| `uptimeGuarantee` | open | Cannot state or imply a guaranteed uptime figure. | `/web-design/website-hosting` |
| `backupTerms` | open | Cannot promise backup frequency or retention. | `/web-design/website-hosting` |
| `securityMonitoring` | open | Cannot claim specific security monitoring/scanning. | `/web-design/website-hosting`, `/seo/technical-seo` |
| `maintenanceTerms` | open | What ongoing maintenance includes and how often. | `/web-design/website-hosting` |
| `supportTerms` | open | Support hours, channels, and response window. | `/web-design/website-hosting`, `/seo/white-label` |
| `sla` | open | Agency/white-label partners ask about service levels. | `/seo/white-label` |
| `turnaroundTimes` | open | White label and content/franchise delivery timelines. | `/seo/white-label`, `/seo/content-writing`, `/seo/franchise-seo` |
| `minimums` | open | Minimum contract length or spend. | All service pages' "Who it's for" / FAQ; `/services` hub |
| `guarantees` | open | Whether any guarantee is offered (currently we state none are made). | All pages, especially `/seo` and FAQ answers |
| `certifications` | open | Cannot list certifications unless held and verifiable. | `/seo`, `/ai-search`, `/digital-marketing`, `/ecommerce-marketing` |
| `partnerPrograms` | open | Do not claim Clutch/HubSpot/Google Ads/Shopify partner status unless true. | `/seo`, `/web-design`, `/ecommerce-marketing`, `/seo/white-label` |
| `geographicLimits` | open | Whether service is limited to Niagara/Canada or remote-anywhere. | All pages' "Who it's for"; `/services` hub |

## How to use this file

1. Get a confirmation for a field from the client.
2. Set the value in `data/services/service-facts.json` (keep the JSON shape; replace `null`).
3. Update the specific pages/blocks listed above to include the now-confirmed fact.
4. Remove the row here (or move it to a "resolved" log) once the fact is live.
