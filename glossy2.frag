#version 330 core

in vec4 frontColor;
out vec4 fragColor;

uniform sampler2D glossy;
uniform int r;

in vec3 vs_normalEyeSpace; // N
in vec4 vs_vertexEyeSpace; // P

vec4 sampleTexture(sampler2D sampler, vec2 st, int r)
{
    vec4 color = vec4(0);
    for (int i = -r; i <= r; ++i) {
        for (int j = -r; j <= r; ++j) {
            vec2 pos = vec2(st.s + (float(i)/512.0), 
                            st.t + (float(j)/512.0));
            color += texture(sampler, pos);                         
        }
    }
    color = (1.0/(pow((2.0 * float(r) + 1.0), 2.0))) * color;
    
	return color;
}

vec4 sampleSphereMap(sampler2D sampler, vec3 R)
{
	float z = sqrt((R.z+1.0)/2.0);
	vec2 st = vec2((R.x/(2.0*z)+1.0)/2.0, (R.y/(2.0*z)+1.0)/2.0);
    st.y = -st.y;
	return sampleTexture(sampler, st, r);
}

void main()
{
	vec3 obs = vec3(0.0);
	vec3 I = normalize(vs_vertexEyeSpace.xyz-obs);
	vec3 R = reflect(I, vs_normalEyeSpace);
	
	fragColor = sampleSphereMap(glossy, R);
}
