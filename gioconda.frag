#version 330 core

in vec4 frontColor;
in vec2 vtexCoord;
out vec4 fragColor;

uniform float time;
uniform sampler2D sampler;
const vec2 offset = vec2(0.057, -0.172);
void main()
{
    if (fract(time) > 0.5) {
        float d = distance(vtexCoord, vec2(0.393, 0.652));
        if (d <= 0.025) {
            fragColor = texture(sampler, vtexCoord + offset);
        }
        else {        
            fragColor = texture(sampler, vtexCoord);
        }    
    }
    else {
        fragColor = texture(sampler, vtexCoord);
    }	
}
/*
float length(vec2,3,4 v) {
    sqrt(x^2 + y^2 ...);
}


float distance(vec2 p1, vec2 p2) {
    vec2 v = v2 - v1;
    return length(v);
}*/
