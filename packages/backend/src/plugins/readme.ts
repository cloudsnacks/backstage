// import { createRouter } from '@axis-backstage/plugin-readme-backend';
// import { Router } from 'express';
// import { PluginEnvironment } from '../types';

// export default async function createPlugin(
//   env: PluginEnvironment,
// ): Promise<Router> {
//   return await createRouter({
//     logger: env.logger,
//     config: env.config,
//     reader: env.reader,
//     discovery: env.discovery,
//     tokenManager: env.tokenManager,
//   });
// }


kubectl apply -f - <<EOF
apiVersion: v1
kind: Secret
metadata:
  name: kubenretes-service-account-token
  namespace: <NAMESPACE>
  annotations:
    kubernetes.io/service-account.name: <SERVICE_ACCOUNT_NAME>
type: kubernetes.io/service-account-token
EOF